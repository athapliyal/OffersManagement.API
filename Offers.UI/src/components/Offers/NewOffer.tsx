import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type NewOfferFormData = {
  title: string;
  description: string;
  startDate: Date | null;
  endDate: Date | null;
  category: number;
  status: number;
};

export const NewOffer: React.FC = () => {
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();

  const { register, getValues, setValue, errors } = useForm<NewOfferFormData>();

  useEffect(() => {
    register({ name: "startDate" }, { required: true });
    register({ name: "endDate" }, { required: true });
  }, [register]);

  return (
    <div className="new-offer-wrapper">
      <div className="new-offer-header">
        <div className="new-offer-header-content">
          <h1>Add new offer</h1>
        </div>
      </div>
      <div className="new-offer-form">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              className="form-control"
              name="title"
              id="title"
              onChange={(e) => setValue("title", e.target.value)}
              ref={register({
                required: "Please enter a title",
              })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              onChange={(e) => setValue("description", e.target.value)}
              ref={register({
                required: "Please enter description",
              })}
            />
          </div>
          <div className="form-group date-inputs">
            <div className="start-date">
              <label htmlFor="startDate">Start Date</label>
              <div className="start-date-picker">
                <DatePicker
                  className="form-control"
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setValue("startDate", date);
                  }}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
            </div>
            <div className="end-date">
              <label htmlFor="endDate">End Date</label>
              <div className="end-date-picker">
                <DatePicker
                  className="form-control"
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    setValue("endDate", date);
                  }}
                  showTimeSelect
                  dateFormat="Pp"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              className="form-control"
              name="category"
              id="category"
              onChange={(e) => setValue("category", e.target.value)}
              ref={register}
            >
              <option value={0}>Clothing</option>
              <option value={1}>Food</option>
              <option value={2}>Sports</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              className="form-control"
              name="status"
              id="status"
              onChange={(e) => setValue("status", e.target.value)}
              ref={register}
            >
              <option value={0}>Published</option>
              <option value={1}>Draft</option>
              <option value={2}>Pending</option>
            </select>
          </div>
        </form>
        <div className="new-offer-buttons">
          <Button variant="outline-danger" className="reset-offer-button">
            Reset offer
          </Button>
          <Button variant="primary" type="submit" className="add-offer-button">
            Add offer
          </Button>
        </div>
      </div>
    </div>
  );
};
