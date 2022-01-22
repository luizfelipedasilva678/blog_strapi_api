module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9a3b0e493faa540f97fa32cbd1f84711'),
  },
});
