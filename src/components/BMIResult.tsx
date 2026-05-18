
type BMIResultProps = {
   weight: string;
   height: string;
};

const getCategory = (bmi: number) => {
   if (bmi < 18.5) return { label: "Λιποβαρής", color: "text-blue-500" };
   if (bmi < 25) return { label: "Φυσιολογικό", color: "text-green-500" };
   if (bmi < 30) return { label: "Υπέρβαρος", color: "text-orange-500" };
   return { label: "Παχυσαρκία", color: "text-red-500" };
};

const BMIResult = ({ weight, height }: BMIResultProps) => {

   let bmi = null;
   let category = null;

   if (weight && height) {
      bmi = Number(weight) / (Number(height) * Number(height));
      category = getCategory(bmi);
   }

   return (
      <div className="mt-4 text-xl">
         <p>
            Ο ΔΜΣ σου είναι:
            {bmi && <strong> {bmi.toFixed(1)}</strong>}
         </p>

         {category && (
            <p className={category.color}>
               {category.label}
            </p>
         )}
      </div>
   );
};
export default BMIResult;