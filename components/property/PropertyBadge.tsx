interface PropertyBadgeProps {
  status: "for-sale" | "let-agreed" | "to-rent";
  badge: string;
}

export default function PropertyBadge({ status, badge }: PropertyBadgeProps) {
  const getBadgeStyles = () => {
    switch (status) {
      case "for-sale":
        return "bg-bm-blue text-white";
      case "let-agreed":
        return "bg-danger-red text-white";
      case "to-rent":
        return "bg-success-green text-white";
      default:
        return "bg-bm-blue text-white";
    }
  };

  return (
    <span
      className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded ${getBadgeStyles()}`}
    >
      {badge}
    </span>
  );
}
