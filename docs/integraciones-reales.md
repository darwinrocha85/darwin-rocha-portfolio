# Integraciones reales pendientes — darwin-rocha-portfolio (LOCAL)

> Plan para pasar de ecosistema propio a integraciones reales de productos,
> todo en tier gratis (0€). Sin login a propósito: demo abierta sin fricción.
> Ver regla LinkedIn en `AGENTS.md` (cada integración visible lleva su post).

## Mapa

| # | Pieza | Producto real | Estado | Qué demuestra | Coste |
|---|-------|---------------|--------|---------------|-------|
| 1 | Pagos naveSpace | Adyen (cuenta test) | Pendiente | Webhooks firmados HMAC, 3DS2/SCA, reembolsos, estados asíncronos. 2º adaptador junto a BankIn, mismo puerto hexagonal | 0€ |
| 2 | Pagos ContentHub | Stripe (test, ya integrado) | Hecho (test) | Checkout + confirmación en servidor | 0€ |
| 3 | Email compra/cancelación | Brevo (API HTTP, 300/día) | Pendiente | Entrega real, reintentos, bounces. Sin SMTP (puerto bloqueado en demo) | 0€ |
| 4 | Taller: "tu nave está lista" | Brevo o WhatsApp sandbox | Pendiente | Notificación transaccional real al cliente | 0€ |
| 5 | Taller: turnos del hangar | Google Calendar API | Pendiente | Reservar slots reales del taller | 0€ |
| 6 | Taller: ubicación | OpenStreetMap + Leaflet | Pendiente | Mapa sin API key ni tarjeta | 0€ |
| 7 | Entradas/facturas | QR Verifactu (AEAT) | Pendiente | Factura válida en España 2026 | 0€ |
| 8 | Fotos naves/repuestos | Cloud Storage (5GB free) | Pendiente | Signed URLs en vez de base64 en SQLite | 0€ |
| 9 | Errores de todo | Sentry (5k eventos/mes) | Pendiente | Operación real: dónde cae un webhook fallido | 0€ |

## Decisiones (no son olvidos)

- **Sin login:** demo abierta para que RRHH no pierda tiempo. El diseño hexagonal
  permite añadir auth sin tocar dominio.
- **Stock sin proveedor externo:** el stock de repuestos es interno por naturaleza.
  Lo "real" ahí es foto + QR + histórico (el histórico ya existe).
- **No activar live keys** (Adyen/Stripe) hasta tener empresa: el valor está en el
  código de webhook + idempotencia, no en cobrar de verdad.

## Orden sugerido

1. Adyen test (mayor salto percibido: adiós "banco de juguete").
2. Brevo + Google Calendar (cierra el loop compra → aviso → turno).
3. Sentry + Storage (operación, no maqueta).
