'use client';

import { motion } from 'framer-motion';
import {
  EmotionalState,
  MeetingType,
  Meters,
  getClimateLabel,
  getEmotionalState,
  getStateName,
  getStateNameForFlorencia,
} from '@/lib/types';

interface Props {
  meters: Meters;
  meetingType: MeetingType;
}

function colorFor(state: EmotionalState, palette: 'climate' | 'don' | 'florencia'): string {
  const climateScale = ['#7fbf8f', '#a9d18e', '#f0c454', '#f08a4a', '#e24b4a'];
  const donScale = ['#5dcaa5', '#a3d97f', '#f0c454', '#f08a4a', '#e24b4a'];
  const florenciaScale = ['#5dcaa5', '#b3d3a8', '#e8c374', '#e89060', '#d54a78'];
  const scales = { climate: climateScale, don: donScale, florencia: florenciaScale };
  return scales[palette][state];
}

interface MeterProps {
  value: number;
  heading: string;
  subhead: string;
  label: string;
  palette: 'climate' | 'don' | 'florencia';
  dim?: boolean;
  highlight?: boolean;
}

function Meter({ value, heading, subhead, label, palette, dim, highlight }: MeterProps) {
  const state = getEmotionalState(value);
  const color = colorFor(state, palette);

  return (
    <div
      className={`flex flex-col items-center transition-opacity duration-500 ${
        dim ? 'opacity-40' : 'opacity-100'
      } ${highlight ? 'scale-105' : ''}`}
    >
      <div className="text-text-tertiary text-[9px] tracking-[0.15em] font-semibold uppercase">
        {heading}
      </div>
      <div className="text-text-tertiary text-[8px] tracking-wide text-center leading-tight mb-1.5 min-h-[1.4em]">
        {subhead}
      </div>

      <div className="relative w-7 h-32 md:h-44 bg-bg-tertiary rounded-full overflow-hidden">
        {[20, 40, 60, 80].map((m) => (
          <div
            key={m}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ bottom: `${m}%` }}
          />
        ))}
        <motion.div
          className="absolute bottom-0 left-0 right-0 rounded-full"
          initial={false}
          animate={{ height: `${value}%`, backgroundColor: color }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </div>

      <motion.div
        className="text-lg md:text-xl font-bold mt-2 tabular-nums"
        animate={{ color }}
        transition={{ duration: 0.5 }}
      >
        {Math.round(value)}
      </motion.div>
      <div className="text-text-tertiary text-[9px] mt-0.5 tracking-wider uppercase text-center leading-tight">
        {label}
      </div>
    </div>
  );
}

export default function MeterPanel({ meters, meetingType }: Props) {
  const climateState = getEmotionalState(meters.climate);
  const donState = getEmotionalState(meters.donRicardo);
  const florenciaState = getEmotionalState(meters.florencia);

  const inPrivateFlorencia = meetingType === 'private-florencia';
  const inPrivateSuavecito = meetingType === 'private-suavecito';

  return (
    <div className="bg-bg-secondary rounded-2xl p-3 md:p-4 select-none">
      <div className="text-text-tertiary text-[10px] tracking-[0.18em] uppercase mb-3 text-center">
        Estado de la mediación
      </div>
      <div className="flex items-end justify-around gap-2 md:gap-3">
        <Meter
          value={meters.climate}
          heading="Clima"
          subhead="del proceso"
          label={getClimateLabel(climateState)}
          palette="climate"
        />
        <Meter
          value={meters.donRicardo}
          heading="D. Ricardo"
          subhead="requerido"
          label={getStateName(donState)}
          palette="don"
          dim={inPrivateFlorencia}
          highlight={inPrivateSuavecito}
        />
        <Meter
          value={meters.florencia}
          heading="Florencia"
          subhead="requirente"
          label={getStateNameForFlorencia(florenciaState)}
          palette="florencia"
          dim={inPrivateSuavecito}
          highlight={inPrivateFlorencia}
        />
      </div>
    </div>
  );
}
