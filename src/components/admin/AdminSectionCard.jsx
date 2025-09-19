import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';

export const AdminSectionCard = ({ sectionConfig, siteData, onEditSection }) => {
  const IconComponent = sectionConfig.icon;

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          {IconComponent && <IconComponent className="w-5 h-5 text-[#1f7135]" />}
          <CardTitle className="text-lg font-semibold text-gray-800">{sectionConfig.title}</CardTitle>
        </div>
        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#1f7135]" onClick={() => onEditSection(sectionConfig.id)}>
          <Edit className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <CardDescription>
          Clique no ícone de lápis para editar o conteúdo desta seção.
        </CardDescription>
        <div className="mt-4 p-3 bg-gray-50 rounded-md border border-dashed border-gray-200 min-h-[80px] text-xs text-gray-500 flex-grow">
          {sectionConfig.fields.map(field => (
            <div key={field.name} className="truncate">
              <strong>{field.label}:</strong> {String(siteData[sectionConfig.id]?.[field.name] || 'Não definido').substring(0,30)}
              {String(siteData[sectionConfig.id]?.[field.name] || '').length > 30 ? '...' : ''}
            </div>
          ))}
          {(!siteData[sectionConfig.id] || Object.keys(siteData[sectionConfig.id]).length === 0) && <p>Nenhum dado configurado.</p>}
        </div>
      </CardContent>
    </Card>
  );
};
