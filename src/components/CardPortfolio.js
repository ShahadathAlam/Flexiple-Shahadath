import { useEffect, useState } from "react";
import Button from "./Button";
import { FaBagShopping } from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";
import { CiMoneyBill } from "react-icons/ci";
function CardPortfolio({
  experience,
  notice,
  ctc,
  workedAt,
  description,
  companies,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const checkVisibility = () => {
    const rect = document
      .getElementById(`card-${experience}`)
      .getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div
      id={`card-${experience}`}
      className={`transform transition-all duration-700 ease-in-out ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
      } p-6 bg-white border rounded-md shadow-lg hover:shadow-2xl`}
    >
      <div className="card-title">
        <p className="flex gap-1 items-center">
          <span>
            <FaBagShopping color="blue" />
          </span>
          {experience} years
        </p>
        <p className="flex gap-1 items-center">
          <span>
            <IoTimer color="blue" />
          </span>
          {notice} to 30 days
        </p>
        <p className="flex gap-1 items-center">
          <span>
            <CiMoneyBill color="blue" />
          </span>
          ₹{ctc}LPA
        </p>
      </div>

      <div className="card-body">
        <p>Worked at:</p>
        <div className="space-x-4">
          {companies.map((company, index) => (
            <Button key={index} border variant="primary">
              {company}
            </Button>
          ))}
        </div>
        <p>{description}</p>
        <div className="mt-4">
          <Button border variant="primary">
            Get a Quote
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardPortfolio;
