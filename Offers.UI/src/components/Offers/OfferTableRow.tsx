import Button from "react-bootstrap/Button";
import { Offer, OfferCategory, OfferStatus } from '../../models';

interface IOfferTableRowProps {
    offer: Offer;
    onCopy: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onDelete: (event: React.MouseEvent<Element, MouseEvent>) => void;
}

export const OfferTableRow: React.FC<IOfferTableRowProps> = (props: IOfferTableRowProps) => {
    const { offer, onCopy, onDelete } = props;

  return (
    <>
      <tr key={offer.id}>
        <td>{offer.title}</td>
        <td>{OfferCategory[offer.category] || '-'}</td>
        <td>{offer.description}</td>
        <td>{offer.startDate}</td>
        <td>{offer.endDate}</td>
        <td>{OfferStatus[offer.status] || '-'}</td>
        <td>
          <Button variant="primary" value={offer.id} onClick={onCopy}>
            Copy
          </Button>
          <Button variant="outline-danger" value={offer.id} onClick={onDelete}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};
