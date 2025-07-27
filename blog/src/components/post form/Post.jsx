import appwriteService from '../../appwrite/Conf';
import React, { useCallback } from 'react';
import { Input, Select, RTE } from '../Index';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Post({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userdata = useSelector((state) => state.auth.userdata);

    const submit = async (data) => {
        try {
            if (post) {
                const file = data.image?.[0]
                    ? await appwriteService.uploadfile(data.image[0])
                    : null;

                if (file) {
                    await appwriteService.deletefile(post.featureimg);
                }

                const dbPost = await appwriteService.updatepost(post.$id, {
                    ...data,
                    featureimg: file ? file.$id : post.featureimg,
                });

                if (dbPost?.$id) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    console.error("Post update failed");
                }
            } else {
                const file = await appwriteService.uploadfile(data.image[0]);
                if (!file || !file.$id) {
                    console.error("File upload failed");
                    return;
                }

                data.featureimg = file.$id;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userid: userdata?.$id,
                });

                if (dbPost?.$id) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    console.error("Post creation failed");
                }
            }
        } catch (err) {
            console.error("Submit error:", err);
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), {
                            shouldValidate: true,
                        });
                    }}
                />
                <RTE
                    label="Content :"
                    name="content"
                    control={control}
                    defaultValue={getValues("content")}
                />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :" 
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getfilepreview(post.featureimg)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <button
                    type="submit"
                    className={`w-full ${post ? "bg-green-500" : "bg-blue-500"} text-white p-2 rounded`}
                >
                    {post ? "Update" : "Submit"}
                </button>
            </div>
        </form>
    );
}

export default Post;
