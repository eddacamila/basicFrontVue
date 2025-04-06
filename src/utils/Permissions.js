export const PermissionTypes = {
  READ: 'read',
  WRITE: 'write',
}

// Define roles and their associated permissions
export const Permissions = {
  // Admin permissions
  ADMIN_READ: {
    value: 'adminRead',
    description: 'Permission to read admin resources'
  },
  ADMIN_WRITE: {
    value: 'adminWrite',
    description: 'Permission to write admin resources'
  },

  VENDOR_READ: {
    value: 'vendorRead',
    description: 'Permission to read vendor resources'
  },
  VENDOR_WRITE: {
    value: 'vendorWrite',
    description: 'Permission to write vendor resources'
  }
}

export function hasPermission(userPermissions, requiredPermission) {
  return userPermissions.includes(requiredPermission)
}

export default Permissions 