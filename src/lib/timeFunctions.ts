export const formatTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const formatDate = () => {
  const now = new Date();
  return now.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateTime = () => {
  const now = new Date();
  return now.toLocaleString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

export const countdown = (targetDate = '2025-01-01T00:00:00') => {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();
  const difference = target - now;

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${mins}m ${seconds}s`;
  } else {
    return '¡Tiempo agotado!';
  }
};

export const timeElapsed = (startDate = '2024-01-01T00:00:00') => {
  const now = new Date().getTime();
  const start = new Date(startDate).getTime();
  const difference = now - start;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export const customTimeFormat = (
  date = new Date(),
  options = {}
) => {
  const defaults = {
    showDate: true,
    showTime: true,
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    separator: ' - ',
    locale: 'es-ES',
  };

  const config = { ...defaults, ...options };
  let result = '';

  if (config.showDate) {
    if (config.dateFormat === 'DD/MM/YYYY') {
      result += date.toLocaleDateString(config.locale);
    } else if (config.dateFormat === 'long') {
      result += date.toLocaleDateString(config.locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  }

  if (config.showDate && config.showTime) {
    result += config.separator;
  }

  if (config.showTime) {
    const timeOptions: Intl.DateTimeFormatOptions =
      config.timeFormat === '12h'
        ? { hour: "2-digit", minute: "2-digit", hour12: true }
        : { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };

    result += date.toLocaleTimeString(config.locale, timeOptions);
  }

  return result;
};
