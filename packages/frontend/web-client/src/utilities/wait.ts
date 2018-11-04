export default function wait (delay: number): Promise<void> {
  return new Promise(resolve => window.setTimeout(resolve, delay));
}
