package com.web.curation.model.handler;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.curation.model.dao.CampingBasicDAO;
import com.web.curation.model.dto.CampingBasicDTO;
import com.web.curation.model.entity.CampingBasicEntity;

@Service
public class CampingBasicHandlerImpl implements CampingBasicHandler {

	CampingBasicDAO campingBasicDAO;
	
	@Autowired
	public CampingBasicHandlerImpl(CampingBasicDAO campingBasicDAO) {
		this.campingBasicDAO = campingBasicDAO;
	}
	
	@Override
	public CampingBasicEntity saveOneCampingBasicEntity
	(CampingBasicDTO campingBasicDTO) {
		CampingBasicEntity campingBasicEntity = new CampingBasicEntity
				(null, campingBasicDTO.getDoNm(), campingBasicDTO.getSigunguNm(), campingBasicDTO.getFacltNm(), campingBasicDTO.getFirstImageUrl(),
						campingBasicDTO.getLineIntro(), campingBasicDTO.getAddress(), campingBasicDTO.getManageSttus(), campingBasicDTO.getMapX(), campingBasicDTO.getMapY(), campingBasicDTO.getLikes());
		return campingBasicDAO.saveOneCampingBasic(campingBasicEntity);
	}

	@Override
	public CampingBasicEntity getOneCampingBasicEntity(Integer campId) {
		return campingBasicDAO.getOneCampingBasicById(campId);
	}
	
	@Override
	public List<CampingBasicEntity> getListCampingBasicEntity() {
		return campingBasicDAO.getListCampingBasicAll();
	}
	
	@Override
	public List<CampingBasicEntity> getListCampingBasicByKeywordEntity(String keyword) {
		return campingBasicDAO.getListCampingBasicByKeywordEntity(keyword);
	}
}
