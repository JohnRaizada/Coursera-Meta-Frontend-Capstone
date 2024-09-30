import { occasions } from "../Data";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
export default function Booking({
  availableTimes,
  availableTimesDispatch,
  submitForm,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().split("T")[0],
      time: availableTimes[0],
      guests: 1,
      occasion: occasions[0],
    },
    validationSchema: Yup.object({
      date: Yup.date("Must be a valid date").required("Required"),
      time: Yup.string("Must be a valid time").required("Required"),
      guests: Yup.number("Must be a natural number")
        .required("Required")
        .min(1, "Atleast 1 is required")
        .max(10, "Atmost 10 are allowed"),
      occasion: Yup.string("Must be a valid occasion").required("Required"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });
  return (
    <section className="booking">
      <form
        onSubmit={(e) => {
          if (formik.isValid) {
            setIsSubmitting(true);
            e.preventDefault();
            formik.handleSubmit(e);
          }
        }}
      >
        <h1 className="display-title highlight-color-other">Reserve a table</h1>
        <div>
          <label
            htmlFor="booking-date"
            className="section-category highlight-color-other"
          >
            Choose date
          </label>
          <input
            type="date"
            required
            id="booking-date"
            name="booking-date"
            {...formik.getFieldProps("date")}
            onChange={(e) => {
              availableTimesDispatch({
                type: "updateTimes",
                date: e.target.value,
              });
              formik.handleChange(e);
            }}
            className={formik.errors.date && formik.touched.date ? "error" : ""}
            title="Choose a date"
          />
          {formik.errors.date && formik.touched.date && (
            <p className="highlight-text secondary-color-main">
              {formik.errors.date}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="booking-time"
            className="section-category highlight-color-other"
          >
            Choose time
          </label>
          <select
            id="booking-time"
            name="booking-time"
            {...formik.getFieldProps("time")}
            className={formik.errors.time && formik.touched.time ? "error" : ""}
            title="Choose a time"
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {formik.errors.time && formik.touched.time && (
            <p className="highlight-text secondary-color-main">
              {formik.errors.time}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="booking-guests"
            className="section-category highlight-color-other"
          >
            Number of guests
          </label>
          <input
            type="number"
            required
            id="booking-guests"
            name="booking-guests"
            placeholder="1"
            min="1"
            max="10"
            {...formik.getFieldProps("guests")}
            className={
              formik.errors.guests && formik.touched.guests ? "error" : ""
            }
            title="Number of guests"
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="highlight-text secondary-color-main">
              {formik.errors.guests}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="booking-occasion"
            className="section-category highlight-color-other"
          >
            Occasion
          </label>
          <select
            required
            id="booking-occasion"
            name="booking-occasion"
            {...formik.getFieldProps("occasion")}
            className={
              formik.errors.occasion && formik.touched.occasion ? "error" : ""
            }
            title="Occasion"
          >
            {occasions.map((occasion) => (
              <option key={occasion} value={occasion}>
                {occasion}
              </option>
            ))}
          </select>
          {formik.errors.occasion && formik.touched.occasion && (
            <p className="highlight-text secondary-color-main">
              {formik.errors.occasion}
            </p>
          )}
        </div>
        {isSubmitting ? (
          <lottie-player
            src="https://lottie.host/21863f2b-b4f9-4105-a6c6-98759685f1da/ojA2pVuLU8.json"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        ) : (
          <button type="submit" title="Submit">Make your reservation</button>
        )}
      </form>
    </section>
  );
}
