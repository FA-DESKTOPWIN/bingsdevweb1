// ============================================
// DATA CONTRACT: Desarrollo Web Express de Autor
// ============================================

export interface SiteData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  ecosystem: {
    sectionTag: string;
    title: string;
    cards: Array<{
      id: string;
      icon: 'pos' | 'nexo' | 'auto';
      title: string;
      description: string;
      features: string[];
    }>;
  };
  philosophy: {
    sectionTag: string;
    title: string;
    oldFlow: {
      label: string;
      pains: string[];
    };
    newFlow: {
      label: string;
      gains: string[];
    };
  };
  whiteGlove: {
    sectionTag: string;
    title: string;
    subtitle: string;
    spotsLeft: number;
    ctaText: string;
    deliverables: string[];
  };
  footer: {
    copyright: string;
    signature: string;
  };
}

export const content: SiteData = {
  hero: {
    eyebrow: 'Desarrollo Web Express de Autor',
    title: 'Migración digital quirúrgica para PyMEs que exigen velocidad.',
    subtitle:
      'Dejás de perder clientes por lentitud operativa. En 14 días, tu negocio opera en un ecosistema digital propio — sin fricción, sin deuda técnica, sin excusas.',
    ctaPrimary: 'Iniciar migración',
    ctaSecondary: 'Ver especificaciones',
  },
  ecosystem: {
    sectionTag: 'Ecosistema Modular',
    title: 'Arquitectura compuesta. Escalabilidad nativa.',
    cards: [
      {
        id: 'aurapos',
        icon: 'pos',
        title: 'AuraPOS',
        description:
          'Punto de venta ultraligero. Transacciones en <200ms. Offline-first.',
        features: ['Sincronización bidireccional', 'Reportes en tiempo real', 'Multi-sucursal'],
      },
      {
        id: 'nexo',
        icon: 'nexo',
        title: 'NexoCRM',
        description:
          'Gestión de clientes sin ruido. Pipeline visual. Automatización de follow-ups.',
        features: ['Segmentación RFM', 'Email triggers', 'Dashboard ejecutivo'],
      },
      {
        id: 'automatizaciones',
        icon: 'auto',
        title: 'Automatizaciones',
        description:
          'Workflows que reemplazan tareas manuales. Integraciones con WhatsApp, Gmail, Sheets.',
        features: ['Triggers condicionales', 'Logs auditables', 'Escalado horizontal'],
      },
    ],
  },
  philosophy: {
    sectionTag: 'Filosofía de Diseño',
    title: 'El flujo antiguo vs. el flujo express.',
    oldFlow: {
      label: 'Flujo Antiguo',
      pains: [
        'Reuniones infinitas sin decisiones',
        'Entregables parciales que nunca cierran',
        'Dependencia total del desarrollador',
        'Sitio "terminado" que nadie actualiza',
      ],
    },
    newFlow: {
      label: 'Flujo Express',
      gains: [
        'Brief quirúrgico en 48hs',
        'Deploy en 14 días calendario',
        'CMS headless para autonomía total',
        'Documentación técnica + video tutoriales',
      ],
    },
  },
  whiteGlove: {
    sectionTag: 'White Glove Service',
    title: 'Atención limitada. Impacto máximo.',
    subtitle:
      'Solo acepto 3 proyectos por mes. Garantizo atención de principio a fin — sin pasantes, sin agencias, sin ruido.',
    spotsLeft: 3,
    ctaText: 'Reservar spot',
    deliverables: [
      'Auditoría de flujo operativo actual',
      'Arquitectura de información validada',
      'Desarrollo front-end + back-end (si aplica)',
      'Integraciones third-party (pagos, email, analytics)',
      'Handoff completo + 30 días de soporte',
    ],
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} Desarrollo Web Express de Autor. Todos los derechos reservados.`,
    signature: 'Arquitectura & Código por [Tu Nombre]',
  },
};
