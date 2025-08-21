import SummaryItem from "./item";
import CardSection from "@/app/components/cardSection";

interface Props {
  items: { title: string; value: string | number }[];
}

const Summary = ({ items }: Props) => {
  return (
    <CardSection title="Summary">
      {items.map((item) => {
        return (
          <SummaryItem key={item.title} title={item.title} value={item.value} />
        );
      })}
    </CardSection>
  );
};

export default Summary;
