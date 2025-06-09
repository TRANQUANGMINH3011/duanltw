import * as borrowRequestService from '@/app/services/borrow-request.service'
import { abort } from '@/utils/helpers'

export async function getUserBorrowRequests(req, res) {
    const { page = 1, limit = 10, sort = { createdAt: -1 } } = req.query
    const borrowRequests = await borrowRequestService.getUserBorrowRequests(req.user.id, {
        page: parseInt(page),
        limit: parseInt(limit),
        sort: typeof sort === 'string' ? JSON.parse(sort) : sort
    })
    res.status(200).json(borrowRequests)
}

export async function getBorrowRequestById(req, res) {
    const borrowRequest = await borrowRequestService.getBorrowRequestById(req.params.id)
    if (borrowRequest.userId.toString() !== req.user.id) {
        return abort(403, 'Bạn không có quyền truy cập yêu cầu mượn thiết bị này')
    }
    res.status(200).json(borrowRequest)
}

export async function createBorrowRequest(req, res) {
    const borrowRequest = await borrowRequestService.createBorrowRequest({
        ...req.body,
        userId: req.user.id,
    })
    res.status(201).json(borrowRequest)
}
