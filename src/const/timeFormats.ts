
export const timeFormats = [
    {
        title: "Hora Básica (HH:MM:SS)",
        description: "Formato de 24 horas con segundos",
        tag: "Básico",
        code: `
    // Formato básico de hora 24h
    const formatTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    console.log(formatTime()); 
    
        `,
        fnName: "formatTime"
    },
    {
        title: "Fecha Completa",
        description: "Fecha en formato español completo",
        tag: "Básico",
        code: `
    // Fecha completa en español
    const formatDate = () => {
        const now = new Date();  
        return now.toLocaleDateString('es-ES', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    console.log(formatDate()); 
        `,
        fnName: "formatDate"
    },
    {
        title: "Fecha y Hora Combinadas",
        description: "Formato completo con fecha y hora",
        tag: "Básico",
        code: `
    // Fecha y hora combinadas
    const formatDateTime = () => {
        const now = new Date();
            return now.toLocaleString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
      };

    console.log(formatDateTime()); // 25/05/2025, 13:03:14
        `,
        fnName: "formatDateTime"
    },
    {
        title: "Contador Regresivo",
        description: "Para eventos o deadlines específicos",
        tag: "Contador",
        code: `
    
 // Contador regresivo hasta una fecha específica
  const countdown = (targetDate) => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return \`\${days}d \${hours}h \${mins}m \${seconds}s\`;
    } else {
      return "¡Tiempo agotado!";
    }
  };

  // Ejemplo: Año Nuevo 2025
  const newYear = countdown('2025-01-01T00:00:00');
  console.log(newYear);
        `,
        fnName: "countdown"
    },
    {
        title: "Tiempo Transcurrido",
        description: "Desde una fecha específica hasta ahora",
        tag: "Relativo",
        code: `
    // Tiempo transcurrido desde una fecha
const timeElapsed = (startDate) => {
  const now = new Date().getTime();
  const start = new Date(startDate).getTime();
  const difference = now - start;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return \`\${days}d \${hours}h \${minutes}m \${seconds} \`;
};

// Ejemplo: Desde el inicio del año
const elapsed = timeElapsed('2024-01-01T00:00:00');
console.log(elapsed);
        `,
        fnName: "timeElapsed"
    },
    {
        title: "Formato Personalizado",
        description: "Con formato completamente customizable",
        tag: "Personalizado",
        code: `
    // Formato personalizable con parámetros
const customTimeFormat = (date = new Date(), options = {}) => {
  const defaults = {
    showDate: true,
    showTime: true,
    dateFormat: 'DD/MM/YYYY',
    timeFormat: '24h',
    separator: ' - ',
    locale: 'es-ES'
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
        day: 'numeric' 
      });
    }
  }

  if (config.showDate && config.showTime) {
    result += config.separator;
  }

  if (config.showTime) {
    const timeOptions = config.timeFormat === '12h' 
      ? { hour: '2-digit', minute: '2-digit', hour12: true }
      : { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    
    result += date.toLocaleTimeString(config.locale, timeOptions);
  }

  return result;
};

// Ejemplos de uso:
console.log(customTimeFormat()); // 25/5/2025 - 15:54:17
console.log(customTimeFormat(new Date(), { timeFormat: '12h', dateFormat: 'long' }));
        `,
        fnName: "customTimeFormat"
    }
];