import { motion } from 'framer-motion';

interface StatsProps {
  stats: { value: string; label: string }[];
  dark?: boolean;
}

export default function Stats({ stats, dark = false }: StatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <div className={`text-3xl md:text-4xl font-display font-bold ${dark ? 'text-gold' : 'text-navy'}`}>
            {stat.value}
          </div>
          <div className={`text-sm mt-1 ${dark ? 'text-gray-300' : 'text-charcoal'}`}>
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
