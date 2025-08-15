interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className = "" }: ServiceCardProps) => {
  return (
    <div className={`bg-card rounded-2xl p-6 hover-scale ${className}`}>
      {icon && <div className="w-10 h-10 mb-4">{icon}</div>}
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-muted font-inter">{description}</p>
    </div>
  );
};

export default ServiceCard;