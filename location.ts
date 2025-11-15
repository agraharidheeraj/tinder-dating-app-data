      // Using CORS proxy to bypass CORS restrictions
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&limit=5&addressdetails=1`
      )}`;



              // Using CORS proxy to bypass CORS restrictions
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&addressdetails=1`
        )}`;