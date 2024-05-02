import {create} from 'zustand'
import { devtools } from 'zustand/middleware'

interface AuthUser {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
}

// Create your store
const useAuthStore = create<AuthUser>()(devtools((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => {
    set(() => ({
        isAuthenticated: value
    }))
  }
})))

export default useAuthStore
