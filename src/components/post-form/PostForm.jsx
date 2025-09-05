import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredimage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredimage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredimage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

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
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap bg-white shadow-lg p-6 rounded-lg">
            <div className="w-full md:w-2/3 px-4">
                <Input
                    label="Title :"
                    placeholder="Enter post title"
                    className="mb-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Auto-generated slug"
                    className="mb-4 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE 
                    label="Content :" 
                    name="content" 
                    control={control} 
                    defaultValue={getValues("content")} 
                    className="mb-4"
                />
            </div>
            <div className="w-full md:w-1/3 px-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image :</label>
                <Input
                    type="file"
                    className="mb-4 border-gray-300 rounded-md p-2"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4 border rounded-lg overflow-hidden shadow-md">
                        <img
                            src={appwriteService.getFileView(post.featuredimage)}
                            alt={post.title}
                            className="w-full object-cover"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4 border-gray-300"
                    {...register("status", { required: true })}
                />
                <Button 
                    type="submit" 
                    bgColor={post ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"} 
                    className="w-full text-white font-medium py-2 rounded-lg transition duration-200 shadow-md"
                >
                    {post ? "Update Post" : "Create Post"}
                </Button>
            </div>
        </form>
    );
}
