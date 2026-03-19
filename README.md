# 🛡️ FraudShield AI — Frontend

Interfaz web para el agente inteligente de detección de fraude en seguros.
Construida con **Next.js 14 + TypeScript + Tailwind CSS + NextAuth**.

## Despliegue en Vercel

### 1. Crear repo en GitHub
```bash
git init
git add .
git commit -m "FraudShield AI frontend"
git remote add origin https://github.com/TU_USUARIO/fraudshield-frontend.git
git push -u origin main
```

### 2. Importar en Vercel
- Ve a vercel.com → Import Project → selecciona tu repo

### 3. Configurar Environment Variables en Vercel
| Variable | Valor |
|----------|-------|
| `GOOGLE_CLIENT_ID` | Tu Client ID de OAuth |
| `GOOGLE_CLIENT_SECRET` | Tu Client Secret de OAuth |
| `NEXTAUTH_SECRET` | Genera uno en https://auth-secret-gen.vercel.app/ |
| `BACKEND_URL` | `https://fraudshield-api-293460116750.us-west4.run.app` |

### 4. Actualizar URI de OAuth
Después del deploy, agrega esta URI en Google Cloud Console → Credentials:
```
https://TU-PROYECTO.vercel.app/api/auth/callback/google
```

## Autor
Christian Noel Sánchez Huamán
Universidad Ricardo Palma — Programa de Especialización en IA y Generativa
