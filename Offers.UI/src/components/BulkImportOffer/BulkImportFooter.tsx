import { Button } from "react-bootstrap";

export const BulkImportFooter: React.FC = () => {
    return (
        <div className="bulk-import__footer col-md-12">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">Upload</Button>
        </div>
    );
};