import create from 'zustand'
import _create from 'zustand/vanilla'
import { persist } from 'zustand/middleware'
import client from '@/graphql/client'
import {
  GetPermissionDocument,
  GetPermissionQuery,
  GetPermissionQueryVariables,
} from '@/graphql/gqls/login/__generated__/login.generated'

type PermissionState = {
  permissions: string[]
  token: string
  setToken: (token: string) => void
  clear: () => void
  fetchPermissions: () => Promise<void>
}

export const permissionKey = 'permissions'

export const permissionStore = _create<PermissionState>(
  persist(
    set => ({
      permissions: [],
      token: '',
      clear: () => {
        set({ permissions: [], token: '' })
      },
      setToken: token => {
        set({ token })
      },
      fetchPermissions: async () => {
        const res = await client.query<
          GetPermissionQuery,
          GetPermissionQueryVariables
        >({
          query: GetPermissionDocument,
          variables: {
            input: {
              menuType: 1, // web
            },
          },
        })
        const permissions = res.data.getPermission || []
        set({ permissions })
      },
    }),
    {
      name: permissionKey,
    },
  ),
)

const usePermissions = create(permissionStore)

export default usePermissions
