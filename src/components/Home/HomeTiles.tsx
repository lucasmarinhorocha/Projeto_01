import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BuildIcon from '@mui/icons-material/Build';
import DescriptionIcon from '@mui/icons-material/Description';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

// Cada tile: rota pra onde leva, ícone, cor de fundo e se ocupa 1 ou 2 colunas
interface TileConfig {
  label: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  wide?: boolean; // tile duplo, como no Windows 10
}

const tiles: TileConfig[] = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon sx={{ fontSize: 40 }} />,
    path: '/dashboard',
    color: '#0078D7', // azul Windows
    wide: true,
  },
  {
    label: 'Insumos',
    icon: <Inventory2Icon sx={{ fontSize: 36 }} />,
    path: '/insumos',
    color: '#00A650', // verde
  },
  {
    label: 'Ocorrências',
    icon: <BuildIcon sx={{ fontSize: 36 }} />,
    path: '/ocorrencias',
    color: '#E74C3C', // vermelho
  },
  {
    label: 'Documentos',
    icon: <DescriptionIcon sx={{ fontSize: 36 }} />,
    path: '/documentos',
    color: '#F2A900', // laranja
  },
  {
    label: 'Presença',
    icon: <QrCodeScannerIcon sx={{ fontSize: 40 }} />,
    path: '/presenca',
    color: '#8E44AD', // roxo
    wide: true,
  },
  {
    label: 'Perfil',
    icon: <PersonIcon sx={{ fontSize: 36 }} />,
    path: '/perfil',
    color: '#00B7C3', // ciano
  },
  {
    label: 'Sair',
    icon: <LogoutIcon sx={{ fontSize: 36 }} />,
    path: '/logout',
    color: '#5A5A5A', // cinza escuro
  },
];

const TILE_SIZE = 130; // tamanho base do quadrado, em px
const GAP = 10;

export const HomeTiles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#1F1F1F', // fundo escuro estilo menu Iniciar
        px: { xs: 2, sm: 6 },
        py: 6,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#fff',
          fontWeight: 300,
          mb: 4,
          letterSpacing: 0.5,
        }}
      >
        GearOne
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: `${GAP}px`,
          maxWidth: (TILE_SIZE + GAP) * 4,
        }}
      >
        {tiles.map((tile) => (
          <Box
            key={tile.path}
            role="button"
            tabIndex={0}
            onClick={() => navigate(tile.path)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(tile.path);
            }}
            sx={{
              width: tile.wide ? TILE_SIZE * 2 + GAP : TILE_SIZE,
              height: TILE_SIZE,
              bgcolor: tile.color,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              p: 1.5,
              cursor: 'pointer',
              userSelect: 'none',
              transition: 'transform 0.12s ease, filter 0.12s ease',
              '&:hover': {
                filter: 'brightness(1.1)',
                transform: 'scale(1.02)',
              },
              '&:active': {
                filter: 'brightness(0.9)',
                transform: 'scale(0.98)',
              },
            }}
          >
            <Box sx={{ mb: 1 }}>{tile.icon}</Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: 500, lineHeight: 1.2 }}
            >
              {tile.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeTiles;