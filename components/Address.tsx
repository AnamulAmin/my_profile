import { FiMail } from "react-icons/fi";
function Address() {
  return (
    <address className="not-italic absolute left-0 bottom-32 md:bottom-4 p-8 hidden sm:block">
      <p className="text-gray-400 flex gap-2 items-center">
        <FiMail className="text-2xl" /> : <a href="mailto:aadelbanat8991@gmail.com">aadelbanat8991@gmail.com</a>
      </p>
    </address>
  );
}

export default Address;
