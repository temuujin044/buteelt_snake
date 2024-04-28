"use client";
import { ButtonBase, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const customStyle = {
  fontSize: "26px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "44px",
};

const custStySec = {
  fontSize: "16px",
  color: "#151515",
  fontWeight: 400,
  lineHeight: "24px",
};

const moreOrLess = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: "-webkit-box",
};

export const CarInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);

  return (
    <Stack width={"1720px"}>
      <Stack borderBottom={"1px solid #E0E0E0"} gap={"8px"}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={customStyle}>2018 Bugatti Chiron awd</Typography>
          <Typography sx={customStyle}>Price On Request</Typography>
        </Stack>
        <Stack mb={"24px"}>
          <Typography fontSize={"14px"} fontWeight={"400"} lineHeight={"22px"}>
            Dubai, United Arab Emirates
          </Typography>
        </Stack>
      </Stack>
      <Stack borderBottom={"1px solid #E0E0E0"} mt={"25px"}>
        <Typography fontSize={"20px"} fontWeight={"400"} lineHeight={"32px"}>
          About This Car
        </Typography>
        <Stack mb={"25px"}>
          <Typography
            style={custStySec}
            sx={!isOpen ? moreOrLess : null}
            ref={ref}
          >
            Lamborghini Beverly Hills ensures that each vehicle undergoes a full
            inspection in house by our factory trained technicians. Live out of
            state? We can help facilitate shipping needs. Let us know what we
            can do to make this purchase as easy as signing paperwork and the
            car effortlessly moving you down the highway. Lamborghini Beverly
            Hills is an O’Gara Coach Company. The O’Gara Coach Company is the
            leading Factory Authorized Dealer for Aston Martin, Bentley,
            Bugatti, Lamborghini, McLaren, Maserati and Rolls-Royce Motor Cars.
            We proudly serve the Greater Los Angeles Area and Orange County
            including Beverly Hills, West Hollywood, the Hollywood Hills, Santa
            Monica, Newport Beach, Anaheim, Pasadena and delivery to anywhere in
            the world. Lamborghini Beverly Hills is known for its extensive
            inventory of world-renowned New and Pre-Owned Lamborghinis. These
            include the current model range of Aventador Coupe and Roadster,
            Huracan Coupe and Spyder and past models such as Gallardo, Diablo
            and Murcielago. O’Gara offers competitive finance, lease and
            purchase options on all New and Pre-Owned / Used vehicles. Respected
            as one of the most successful luxury and exotic automotive outlets
            in the world, O’Gara Coach Company continues to set unmatched
            records in luxury and performance sales as well as service. Where
            Luxury is Never Compromised.
          </Typography>

          {showReadMore && (
            <ButtonBase onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Read Less" : "Read More"}
            </ButtonBase>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
