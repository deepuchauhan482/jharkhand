(function () {
  document.documentElement.style.visibility = 'hidden';
  const client = window.supabaseClient;

  function loginUrl() {
    const next = `${location.pathname}${location.search}${location.hash}`;
    return `/login/?next=${encodeURIComponent(next)}`;
  }

  async function protectPage() {
    try {
      const { data, error } = await client.auth.getSession();
      if (error || !data.session?.user) {
        location.replace(loginUrl());
        return;
      }

      const user = data.session.user;
      const { data: profile } = await client
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .maybeSingle();
      const role = profile?.role || 'citizen';

      if (location.pathname.startsWith('/admin') && role !== 'admin') {
        location.replace('/');
        return;
      }

      if (location.pathname.startsWith('/admin') && localStorage.getItem('adminLoggedIn') !== 'yes') {
        localStorage.setItem('adminLoggedIn', 'yes');
        location.reload();
        return;
      }

      document.documentElement.style.visibility = 'visible';
      window.addEventListener('DOMContentLoaded', () => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Log out';
        button.setAttribute('aria-label', 'Log out of the portal');
        button.style.cssText = 'position:fixed;right:16px;bottom:16px;z-index:9999;border:0;border-radius:999px;padding:10px 16px;background:#16463c;color:#fff;font:700 13px Arial;box-shadow:0 8px 24px rgba(0,0,0,.2);cursor:pointer';
        button.addEventListener('click', async () => {
          button.disabled = true;
          await client.auth.signOut();
          localStorage.removeItem('adminLoggedIn');
          location.replace('/login/');
        });
        document.body.appendChild(button);
      });
    } catch (error) {
      location.replace(loginUrl());
    }
  }

  protectPage();
})();
