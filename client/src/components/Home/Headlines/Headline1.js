import React from "react";
import { CardColumns } from "reactstrap";

//Importiong Components
import HeadlineDetailsComponent from "./HeadlineDetails";

const Headline1 = (props) => {
  return (
    <div className="mt-3">
      <div className="c-headlineBlockBorder"></div>
      <div className="c-headlineBlock mb-2"></div>
      <h2 className="border-bottom mb-3 pb-2">
        Local Nudist Refuses To Wear Face Mask
      </h2>
      <h3 className="mb-3">
        “IT’S a matter of principal” said local nudist Cormac Kenetty, standing
        naked at the entrance to his local Super Valu.
      </h3>
      <CardColumns className="c-headlineColumn">
        <p>
          Months of lockdown restrictions and the shuttering of many amenities
          and businesses has proven to be too much for Kenetty, who has chosen
          today as the day he says ‘no more’ and fights for his nudist rights.
        </p>
        <p>
          With face masks becoming ever present in public and some businesses
          requesting customers to wear them on their premises, what many saw as
          a sensible move has been called ‘outrageous’ by Waterford’s burgeoning
          nudist community.
        </p>
        <p>
          “This is a way of life for us and we won’t make a compromise, not even
          for wearing masks,” confirmed Kenetty, his keys, phone and wallet
          clenched in his hands due to a lack of pockets.
        </p>
        <p>
          Refused entry to shops on the grounds of ‘we can see your mickey’,
          Kenetty is considering mounting a legal challenge on the grounds his
          freedom of expression and the freedom of his testicles to just hang
          there are being threatened.
        </p>
        <p>
          “Oh, don’t worry, I’m very careful in the fruit and veg aisles – I
          don’t lean crotch first so none of the produce get a testicle tickle,”
          promised Kenetty, before carefully peeling his ball sack off of his
          inside leg.
        </p>
        <HeadlineDetailsComponent />
      </CardColumns>
    </div>
  );
};

export default Headline1;
