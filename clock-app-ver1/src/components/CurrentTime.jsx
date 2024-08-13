function CurrentTime() {
  let time = new Date();
  return (
    <p className="lead">
      this is current time :{time.toLocaleDateString()} -{' '}
      {time.toLocaleTimeString()};
    </p>
  );
}
export default CurrentTime;
