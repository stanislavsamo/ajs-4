export default function healthStatus({ name, health }) {
    if (health > 50) {
      return 'healthy';
    } else if (health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
  }