import { INodeConstruct } from "../../models/interfaces/INodeConstruct.interface";

export const mockNodeConstruct: INodeConstruct[] = [{
  label: 'Obra',
  children: [
    {
      label: 'Bloco A (Azul)',
      children: [
        {
          label: 'Andar 1',
          children: [
            { label: 'Apartamento 101', id_residence: '1' },
            { label: 'Apartamento 102', id_residence: '2' },
            { label: 'Apartamento 103', id_residence: '3' },
            { label: 'Apartamento 104', id_residence: '4' },
          ]
        },
        {
          label: 'Andar 2',
          children: [
            { label: 'Apartamento 201', id_residence: '5' },
            { label: 'Apartamento 202', id_residence: '6' },
            { label: 'Apartamento 203', id_residence: '7' },
            { label: 'Apartamento 204', id_residence: '8' },
          ]
        },
        {
          label: 'Andar 3',
          children: [
            { label: 'Apartamento 301', id_residence: '9' },
            { label: 'Apartamento 302', id_residence: '10' },
            { label: 'Apartamento 303', id_residence: '11' },
            { label: 'Apartamento 304', id_residence: '12' },
          ]
        },
        {
          label: 'Andar 4',
          children: [
            { label: 'Apartamento 401', id_residence: '13' },
            { label: 'Apartamento 402', id_residence: '14' },
            { label: 'Apartamento 403', id_residence: '15' },
            { label: 'Apartamento 404', id_residence: '16' },
          ]
        }
      ]
    },
    {
      label: 'Bloco B (Azul)',
      children: [
        { label: 'Apartamento 101', id_residence: '17' },
        { label: 'Apartamento 102', id_residence: '18' },
        { label: 'Apartamento 103', id_residence: '19' },
        { label: 'Apartamento 104', id_residence: '20' },
        { label: 'Apartamento 201', id_residence: '21' },
        { label: 'Apartamento 202', id_residence: '22' },
        { label: 'Apartamento 203', id_residence: '23' },
        { label: 'Apartamento 204', id_residence: '24' },
        { label: 'Apartamento 301', id_residence: '25' },
        { label: 'Apartamento 302', id_residence: '26' },
        { label: 'Apartamento 303', id_residence: '27' },
        { label: 'Apartamento 304', id_residence: '28' },
        { label: 'Apartamento 401', id_residence: '29' },
        { label: 'Apartamento 402', id_residence: '30' },
        { label: 'Apartamento 403', id_residence: '31' },
        { label: 'Apartamento 404', id_residence: '32' },
      ]
    }
  ]
},
];
