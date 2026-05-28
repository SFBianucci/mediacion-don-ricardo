'use client';

import { motion } from 'framer-motion';
import { MediationStage, TOTAL_STAGES, stageName, stageNumber } from '@/lib/types';

interface Props {
  stage: MediationStage;
}

const STAGE_DESC: Record<MediationStage, string> = {
  apertura: 'Legitimación, empowerment, principios Art. 7',
  'conjunta-inicial': 'Las partes narran. Escucha activa y parafraseo',
  'privada-florencia': 'Indagar interés real y MAAN de tu clienta',
  'privada-suavecito': 'Pregunta circular y agente de la realidad',
  replanteo: 'De posiciones a intereses',
  brainstorming: 'Generar opciones sin compromiso',
  'criterios-objetivos': 'Anclar el acuerdo en normas externas',
  acuerdo: 'Redacción Harvard de la cláusula final',
};

export default function StageBadge({ stage }: Props) {
  const num = stageNumber(stage);
  const name = stageName(stage);
  const desc = STAGE_DESC[stage];

  return (
    <motion.div
      key={stage}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-secondary border border-bg-accent rounded-xl px-4 py-2.5 flex flex-col md:flex-row md:items-center gap-1 md:gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="bg-bg-tertiary rounded-md px-2 py-0.5 text-[10px] tracking-wider uppercase text-text-tertiary font-semibold whitespace-nowrap">
          Etapa {num} de {TOTAL_STAGES}
        </div>
        <div className="text-text-primary font-semibold text-sm md:text-base">{name}</div>
      </div>
      <div className="text-text-tertiary text-xs md:text-sm md:ml-auto italic">{desc}</div>
    </motion.div>
  );
}
