import type { Statement } from '../types/puzzle';

interface StatementsSectionProps {
  statements: Statement[];
}

export default function StatementsSection({ statements }: StatementsSectionProps) {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-indigo-800 p-4 md:p-6 rounded-lg mb-6 md:mb-8 border-2 border-blue-500 shadow-lg shadow-blue-900/50">
      <h2 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4 flex items-center">
        <span className="text-2xl mr-2">💬</span>
        Witness Statements
      </h2>
      <p className="text-blue-200 text-sm mb-4 italic">
        What did each suspect say about the night of the murder?
      </p>
      
      <div className="space-y-4">
        {statements.map((statement, idx) => (
          <div 
            key={idx} 
            className="bg-blue-950/50 p-4 rounded-lg border-l-4 border-blue-400"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl shrink-0">💬</div>
              <div className="flex-1">
                <div className="font-bold text-blue-300 mb-2">{statement.suspect}:</div>
                <p className="text-blue-100 italic">"{statement.claim}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}