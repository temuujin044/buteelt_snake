"use client";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { useState } from "react";

interface CarouselProps {
  children: string[];
}

export function Carousel({ children: images }: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <Stack width={"400px"} overflow={"hidden"} position={"relative"}>
      <Stack
        sx={{ transform: `translateX(-${curr * 100}%)` }}
        direction={"row"}
      >
        {images}
      </Stack>
      <Stack direction={"row"} position={"absolute"}>
        <Button onClick={prev}>
          <ChevronLeft />
        </Button>
        <Button onClick={next}>
          <ChevronRight />
        </Button>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          {images.map((e, i) => (
            <Stack
              key={i}
              sx={{
                transition: "all",
                width: "5px",
                height: "5px",
                bgcolor: "white",
                borderRadius: "100%",
                ...(curr === i && { p: "5px", bgcolor: "white" }),
              }}
            />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
