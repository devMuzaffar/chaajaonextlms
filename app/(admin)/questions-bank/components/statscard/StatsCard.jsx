import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const StatsCard = ({ subject, numbers }) => {
  return (
    <div className="text-center">
      <Card sx={{ width: "100%" }}>
        <CardContent className="flex flex-col items-center space-y-2">
          <h2 className="font-semibold text-3xl text-primary">{numbers}</h2>
          <p className="font-medium text-2xl capitalize">{subject}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatsCard;
