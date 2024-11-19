import Button from "./Button";

function CardSticky() {
  return (
    <div className="p-6 bg-white border rounded-md shadow-lg sticky top-20">
      <div className="card-title">
        <p>99% of Flexiple's clients hire talent after a risk-free trial.</p>
      </div>

      <div className="card-body">
        <p>
          Flexiple's meticulous screening and matching process connects you with
          exceptional developers perfectly aligned to your specific needs.
        </p>
        <Button border variant="primary">
          Book a consultation call
        </Button>
      </div>
    </div>
  );
}

export default CardSticky;
