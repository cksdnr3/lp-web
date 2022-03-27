/// <reference types="react-scripts" />
interface Window {
  Kakao: {
    init: (restApiKey: string) => Promise<void>;
    isInitialized: () => boolean;
    cleanup: () => Promise<void>;
    Auth: {
      setAccessToken: (token: string) => Promise<void>;
      login: ({ success: any, fail: any, persistAccessToken: boolean }) => void;
      authorize: any;
    };
    API: {
      request: (params: {
        url: string;
        success?: (response: any) => void;
        fail?: (error: any) => void;
        always?: (response: any) => void;
        data?: { property_keys: string[] };
      }) => Promise<{
        id: number;
        kakao_account: {
          profile: {
            nickname: string;
            profile_image_url: string;
            thumbnail_image_url: string;
          };
        };
      }>;
    };
  };
}
