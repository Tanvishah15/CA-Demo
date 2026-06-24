import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { TEAM_MEMBERS, TEAM_CATEGORIES } from '../../data/team';

export default function Team() {
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter((m) => m.category === filter);

  return (
    <section className="py-20 bg-surface" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Meet The Experts"
          subtitle="A multidisciplinary team of chartered accountants, company secretaries, tax consultants, and legal advisors."
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              filter === 'all' ? 'bg-navy text-white' : 'bg-white text-charcoal hover:bg-gray-100'
            }`}
          >
            All Team
          </button>
          {TEAM_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                filter === cat.key ? 'bg-navy text-white' : 'bg-white text-charcoal hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy-light rounded-full flex items-center justify-center mx-auto mb-4 text-gold font-display font-bold text-2xl group-hover:from-gold group-hover:to-gold-dark group-hover:text-navy transition-all">
                {member.initials}
              </div>
              <h3 className="font-display font-semibold text-navy">{member.name}</h3>
              <p className="text-sm text-gold font-medium mb-2">{member.role}</p>
              <div className="flex flex-wrap gap-1 justify-center mb-3">
                {member.qualifications.map((q) => (
                  <span key={q} className="text-[10px] bg-surface px-2 py-0.5 rounded-full text-charcoal">{q}</span>
                ))}
              </div>
              <p className="text-xs text-charcoal">{member.experience} · {member.specialization}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
