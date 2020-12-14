import { useCallback } from "react";

import { useDropzone } from "react-dropzone";

export const BulkImportDropzone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // call API here to upload file
    alert("files dropped");
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  return (
    <div className="col-md-8 col-sm-12">
      <div {...getRootProps({ className: "bulk-import__dropzone" })}>
        <input {...getInputProps()} />
        <h1>Drag and Drop CSV File Here</h1>
        <p>Or select a file from your computer</p>
      </div>
    </div>
  );
};
