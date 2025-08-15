interface StepCardProps {
  step: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const StepCard = ({ step, title, description, icon }: StepCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 hover-scale">
      <span className="bg-background rounded-full px-4 py-1 text-sm font-medium">
        {step}
      </span>
      {icon && <div className="mt-6">{icon}</div>}
      <h3 className="mt-6 text-3xl font-bold">{title}</h3>
      <p className="mt-4 text-muted font-inter">{description}</p>
    </div>
  );
};

export default StepCard;