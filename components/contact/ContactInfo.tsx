import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-gray-600 mb-6">
          Get in touch with us for all your property needs in Leicester and surrounding areas.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <MapPin className="text-bm-blue mt-1" size={20} />
          <div>
            <p className="font-medium text-gray-800">Address</p>
            <p className="text-gray-600">
              312 St Saviours Road
              <br />
              Leicester
              <br />
              LE2 7BX
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="text-bm-blue mt-1" size={20} />
          <div>
            <p className="font-medium text-gray-800">Phone</p>
            <a
              href="tel:01162709060"
              className="text-gray-600 hover:text-bm-blue transition-colors"
            >
              0116 270 9060
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="text-bm-blue mt-1" size={20} />
          <div>
            <p className="font-medium text-gray-800">Email</p>
            <a
              href="mailto:enquiries@bmestates.com"
              className="text-gray-600 hover:text-bm-blue transition-colors"
            >
              enquiries@bmestates.com
            </a>
          </div>
        </div>
      </div>

      <OpeningHours />
    </div>
  );
}

function OpeningHours() {
  const hours = [
    { day: "Monday", time: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
    { day: "Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 4:00 PM" },
    { day: "Sunday", time: "By Appointment" },
  ];

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-bm-blue" size={20} />
        <h3 className="text-xl font-semibold text-gray-800">Opening Hours</h3>
      </div>
      <div className="bg-gray-50 rounded-lg p-4">
        <table className="w-full">
          <tbody>
            {hours.map((item, index) => (
              <tr key={index} className={index !== hours.length - 1 ? "border-b border-gray-200" : ""}>
                <td className="py-2 text-gray-800 font-medium">{item.day}</td>
                <td className="py-2 text-gray-600 text-right">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
