import PriceOption from "./priceOption";
const PriceOptions = () => {
  const priceoptions = [
    {
      id: 1,
      name: "Basic",
      price: 20,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 personal training session per month",
        "Access to cardio machines",
        "Standard shower facilities",
        "Free parking during visits",
        "Wi-Fi access in lobby area",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 40,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "3 personal training sessions per month",
        "Access to sauna and steam room",
        "Access to strength training machines",
        "Priority parking space",
        "Access to cycling studio",
        "Wi-Fi access throughout facility",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 60,
      features: [
        "24/7 gym access",
        "Locker room with premium amenities",
        "Unlimited group classes",
        "5 personal training sessions per month",
        "Access to sauna and steam room",
        "Monthly body composition analysis",
        "Free guest pass once a month",
        "Access to all specialized studios",
        "Complimentary towel service",
        "Discount on gym merchandise",
        "Access to massage chairs",
        "Private changing rooms",
      ],
    },
    {
      id: 4,
      name: "VIP",
      price: 100,
      features: [
        "24/7 gym access",
        "Private locker",
        "Unlimited group and specialty classes",
        "Unlimited personal training sessions",
        "Access to sauna, steam room, and pool",
        "Weekly body composition analysis",
        "Free guest pass anytime",
        "Nutrition and wellness coaching",
        "Free healthy snacks and drinks",
        "Personalized workout and meal plan",
        "VIP parking space",
        "Complimentary massage therapy",
        "Access to private training room",
        "Monthly spa treatment included",
        "Discount on personal gear and apparel",
      ],
    },
  ];

  return (
    <div className="m-1">
      <h2>Best Price in the Town</h2>
     <div className="grid md:grid-cols-3 grid-cols-1 gap-6 ">
     {
      priceoptions.map(option =><PriceOption option={option} key={option.id}></PriceOption>)
      }
     </div>
    </div>
  );
};

export default PriceOptions;
