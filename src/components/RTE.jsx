import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

export default function RTE({
  name = "content",
  control,
  label,
  height = 400,
  initialValue = "<p>Start writing your content here...</p>",
  placeholder = "Write something amazing...",
}) {
  return (
    <div className="w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="inline-block mb-2 text-gray-700 font-medium"
        >
          {label}
        </label>
      )}

      {/* Editor wrapper */}
      <div className="border border-gray-300 rounded-lg shadow-sm focus-within:border-blue-500 transition-all duration-300">
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Editor
              id={name}
              apiKey="nfmnq48637n1xoimfe7sdk2dp5nszdd49gai6834hphz9h9x"
              value={value}
              initialValue={initialValue}
              init={{
                height,
                menubar: true, // allow font menus
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "wordcount",
                  "help",
                ],
                toolbar: `
                  undo redo | 
                  fontselect fontsizeselect | 
                  bold italic underline strikethrough | 
                  forecolor backcolor removeformat |
                  alignleft aligncenter alignright alignjustify | 
                  bullist numlist outdent indent | 
                  link image media table | 
                  code preview
                `,
                // Customize font list
                font_formats: `
                  Arial=arial,helvetica,sans-serif;
                  Courier New=courier new,courier,monospace;
                  Georgia=georgia,palatino;
                  Tahoma=tahoma,arial,helvetica,sans-serif;
                  Times New Roman=times new roman,times;
                  Verdana=verdana,geneva;
                  Inter=Inter,sans-serif
                `,
                fontsize_formats: "10px 12px 14px 16px 18px 20px 24px 28px 32px 36px", // font sizes
                placeholder,
                content_style: `
                  body {
                    font-family: 'Inter', sans-serif;
                    font-size: 14px;
                    padding: 12px;
                  }
                `,
                branding: false,
              }}
              onEditorChange={onChange}
            />
          )}
        />
      </div>
    </div>
  );
}
