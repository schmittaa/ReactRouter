import { Form, FormControl, Button } from "react-bootstrap";
import ReactStars  from 'react-star-rating-component';
import { useState } from "react";
import AddMovie from "./AddMovie";

function NavBar({ addMovie, getTitle, getRate }) {
  const ratingChanged = (newRating) => {
    getRate(newRating);
    };
  const [show, setShow] = useState(false);
  return (
    <>


      <Form style={{ marginLeft: "25%", marginTop: '20px', width: "350px" }}>
        <FormControl
          type="search"
          placeholder="Search For  a movie"
          onChange={e => getTitle(e.target.value)}
          className="me-2"
          aria-label="Search"
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </Form>
      <Button
        style={{ float: "right", marginRight: "250px", width: "200px", marginTop: "-40px" }}
        variant="outline-success"
        onClick={() => setShow(!show)} > {show ? "Done with adding" : "Add New Movie"}</Button>
      {
        show ? <div className="Add"><AddMovie addMovie={addMovie} /></div>
          : null

      }
    </>
  )
}
export default NavBar;