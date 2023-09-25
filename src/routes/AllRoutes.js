import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { DateCounterV1, DateCounterV2, FlashCards, Steps } from "../challenges";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datecounterv1" element={<DateCounterV1 />} />
        <Route path="/datecounterv2" element={<DateCounterV2 />} />
        <Route path="/flashcards" element={<FlashCards />} />
        <Route path="/steps" element={<Steps />} />
      </Routes>
    </div>
  );
};