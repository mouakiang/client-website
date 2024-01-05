export default function Appointment() {
  return (
    <div className="appointmentPage">
      <iframe
        src="https://app.acuityscheduling.com/schedule.php?owner=31154426"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      ></script>
    </div>
  );
}
