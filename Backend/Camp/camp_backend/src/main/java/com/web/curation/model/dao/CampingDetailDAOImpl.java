package com.web.curation.model.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.curation.model.entity.CampingBasicEntity;
import com.web.curation.model.entity.CampingDetailEntity;
import com.web.curation.model.repository.CampingBasicRepository;
import com.web.curation.model.repository.CampingDetailRepository;

@Service
public class CampingDetailDAOImpl implements CampingDetailDAO {

	@Autowired
	CampingBasicRepository campingBasicRepository;
	
	@Autowired
	CampingDetailRepository campingDetailRepository;
	
//	@Autowired
//	public CampingDetailDAOImpl(CampingDetailRepository campingDetailRepository) {
//		this.campingDetailRepository = campingDetailRepository;
//	}
	
	@Override
	public CampingDetailEntity saveOneCampingDetail(CampingDetailEntity campingDetailEntity) {
//		CampingBasicEntity campingBasicEntity = campingBasicRepository.getOne(campinDetailE))
		campingDetailRepository.save(campingDetailEntity);
		
		return campingDetailEntity;
	}
	
	@Override
	public CampingDetailEntity getOneCampingDetailById(Integer campId) {
		CampingDetailEntity campingDetailEntity = campingDetailRepository.getById(campId);
		return campingDetailEntity;
	}
}
