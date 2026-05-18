import {useState} from "react";
import BMIResult from "./BMIResult.tsx";

const BMIForm = () => {

   const [weight, setWeight] = useState("");
   const [height, setHeight] = useState("");

   //const bmi = (Number(weight) / Number(height) * Number(height)).toFixed(1);

   return (
      <>
         <h1 className="text-amber-500 text-center text-3xl font-bold mt-20">Βρες το Δείκτη Μάζας Σώματός σου!</h1>
         <div className="text-center mt-20">
            <input type="text"
                   className="border px-4 py-2 mr-2"
                   placeholder="Βάρος σε κιλά"
                   value={weight}
                   onChange={(event) => setWeight(event.target.value)}
            />
            <input type="text"
                   className="border px-4 py-2"
                   placeholder="Ύψος σε μέτρα"
                   value={height}
                   onChange={(event) => setHeight(event.target.value)}
            />
            <BMIResult weight={weight} height={height} />
         </div>
      </>
   )
}
export default BMIForm;