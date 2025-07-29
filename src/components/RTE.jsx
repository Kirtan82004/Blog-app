import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({ name, control, label }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-2 text-gray-700 font-medium">{label}</label>}

      <div className="border border-gray-300 rounded-lg shadow-sm focus-within:border-blue-500 transition-all duration-300">
        <Controller
          name={name || "content"}
          control={control}
          render={({ field: { onChange } }) => (
            <Editor
              apiKey="nfmnq48637n1xoimfe7sdk2dp5nszdd49gai6834hphz9h9x"
              initialValue="<p>Start writing your content here...</p>"
              init={{
                height: 400,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table code help wordcount",
                ],
                toolbar:
                  "undo redo | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link image | code preview",
                content_style: "body { font-family: 'Inter', sans-serif; font-size: 14px; padding: 10px; }",
                branding: false, // Removes TinyMCE branding
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
